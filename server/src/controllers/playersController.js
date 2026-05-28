const { z } = require('zod');
const { filterPlayers, getPlayerById } = require('../services/playerService');

const listPlayersSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  injured: z.enum(['true', 'false']).optional(),
  sort: z.enum(['name-asc', 'name-desc', 'value-asc', 'value-desc']).optional(),
  page: z.string().optional(),
  limit: z.string().optional()
});

const listPlayers = (req, res, next) => {
  try {
    const parsedQuery = listPlayersSchema.parse(req.query);
    const result = filterPlayers(parsedQuery);

    res.status(200).json({
      success: true,
      data: result.items,
      meta: result.pagination
    });
  } catch (error) {
    next(error);
  }
};

const getPlayer = (req, res, next) => {
  try {
    const player = getPlayerById(req.params.id);

    if (!player) {
      return res.status(404).json({
        success: false,
        message: 'Player not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: player
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  listPlayers,
  getPlayer
};
