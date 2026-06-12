const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const userRole = req.user?.role;

      if (!userRole) {
        return res.status(401).json({
          message: "Unauthorized: Role not found",
        });
      }

      const isAllowed = allowedRoles.includes(userRole);

      if (!isAllowed) {
        return res.status(403).json({
          message: "Access Denied",
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
};

module.exports = authorizeRole;