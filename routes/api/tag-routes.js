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

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(
      {
        tag_name: req.body.tag_name,
      }
    )
    const tagView = await Tag.findAll({
      where: {
        tag_name: req.body.tag_name
      },
    })
    return res.status(200).json(tagView)
  } catch {
    return res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    return res.status(200).json(updateTag)
  } catch {
    return res.status(400).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
