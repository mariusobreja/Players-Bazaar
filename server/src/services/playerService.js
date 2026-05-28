const { players } = require('../data/players');

const parseNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

const filterPlayers = ({
  search = '',
  category,
  injured,
  sort = 'name-asc',
  page = 1,
  limit = 10
}) => {
  const normalizedSearch = search.trim().toLowerCase();

  let filtered = [...players];

  if (normalizedSearch) {
    filtered = filtered.filter((player) =>
      player.name.toLowerCase().includes(normalizedSearch)
    );
  }

  if (category) {
    filtered = filtered.filter(
      (player) => player.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (injured === 'true' || injured === 'false') {
    const isInjured = injured === 'true';
    filtered = filtered.filter((player) => player.injured === isInjured);
  }

  const sortStrategies = {
    'name-asc': (a, b) => a.name.localeCompare(b.name),
    'name-desc': (a, b) => b.name.localeCompare(a.name),
    'value-asc': (a, b) => a.marketValue - b.marketValue,
    'value-desc': (a, b) => b.marketValue - a.marketValue
  };

  filtered.sort(sortStrategies[sort] || sortStrategies['name-asc']);

  const safePage = parseNumber(page, 1);
  const safeLimit = parseNumber(limit, 10);

  const startIndex = (safePage - 1) * safeLimit;
  const paginatedItems = filtered.slice(startIndex, startIndex + safeLimit);

  return {
    items: paginatedItems,
    pagination: {
      page: safePage,
      limit: safeLimit,
      totalItems: filtered.length,
      totalPages: Math.ceil(filtered.length / safeLimit) || 1
    }
  };
};

const getPlayerById = (id) => {
  const numericId = Number(id);
  if (!Number.isFinite(numericId)) {
    return null;
  }

  return players.find((player) => player.id === numericId) || null;
};

module.exports = {
  filterPlayers,
  getPlayerById
};
