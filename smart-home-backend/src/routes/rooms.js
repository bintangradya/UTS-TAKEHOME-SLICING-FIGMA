const express = require('express');
const router = express.Router();

const rooms = [
  {
    id: 1,
    name: "Living Room",
    parameters: {
      temperature: 22,
      light: 75,
      humidity: 45
    },
    image: "/images/living-room.png"
  },
  {
    id: 2,
    name: "Bedroom",
    parameters: {
      temperature: 24,
      light: 60,
      humidity: 50
    },
    image: "/images/bedroom.png"
  },
  // Tambahkan data ruangan lainnya di sini
];

// Get all rooms
router.get('/rooms', (req, res) => {
  res.json(rooms);
});

// Get room by ID
router.get('/rooms/:id', (req, res) => {
  const room = rooms.find(r => r.id === parseInt(req.params.id));
  if (!room) return res.status(404).send('Room not found');
  res.json(room);
});

// Update room parameters
router.put('/rooms/:id', (req, res) => {
  const room = rooms.find(r => r.id === parseInt(req.params.id));
  if (!room) return res.status(404).send('Room not found');

  const { temperature, light, humidity } = req.body;
  if (temperature !== undefined) room.parameters.temperature = temperature;
  if (light !== undefined) room.parameters.light = light;
  if (humidity !== undefined) room.parameters.humidity = humidity;

  res.json(room);
});

module.exports = router;