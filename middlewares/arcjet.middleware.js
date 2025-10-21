import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    // Run Arcjet protection
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      // Log reason for easier debugging
      console.log(
        "Arcjet denied request:",
        decision.reason?.type || decision.reason
      );

      if (decision.reason?.isRateLimit?.()) {
        return res.status(429).json({
          message:
            "Too many requests. Rate limit exceeded, please try again later.",
        });
      }

      if (decision.reason?.isBot?.()) {
        return res.status(403).json({ message: "Forbidden, Bot detected" });
      }

      // Generic denial
      return res.status(403).json({ message: "Access denied" });
    }

    // Allow request if no denial
    next();
  } catch (error) {
    console.error("Arcjet middleware error:", error);
    // Fallback: allow requests if Arcjet fails (safe for dev)
    next();
  }
};

export default arcjetMiddleware;
