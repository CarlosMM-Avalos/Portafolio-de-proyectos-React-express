import express from "express";

const router = express.Router();

// GET proyectos
router.get("/", (req, res) => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Inventario",
      description: "Aplicación para gestionar inventario con Laravel",
      tech: ["Laravel", "MySQL"]
    },
    {
      id: 2,
      title: "App Restaurante",
      description: "Web app con React y Django",
      tech: ["React", "Django"]
    }
  ];

  res.json(projects);
});

export default router;