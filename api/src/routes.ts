
router.get("/utilisateurs", getAllUsers);
router.post("/utilisateurs", (req, res) => {
    res.status(201).json({message: "User created"})
});
router.get("/utilisateurs/:id", GetUserById);

router.get("/annonces", getAllAdverts);
router.get("/annonces/:id", getAdvertsById);

router.get("/*", (req, res) => {
    res.status(404).json({message: "Not Found"})
});
