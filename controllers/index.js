// Entry Point for controllers ROUTERS
const router = require('express').Router();

router.use('', homeRoutes);
router.use('', authenticationRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;

