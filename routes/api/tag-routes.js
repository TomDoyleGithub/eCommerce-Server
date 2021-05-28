const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
const tags = await Tag.findAll({
  include: [{ model: Product }],
});
return res.status(200).json(tags)
  } catch {
    return res.status(400).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const selectedTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    return res.status(200).json(selectedTag)
  } catch {
    return res.status(400).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
