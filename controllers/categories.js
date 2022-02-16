const Category = require("./../models/Category");

/**method for endpoints
 *
 * @desc GET categories
 * @route GET api/v1/categories
 * @access Private/Admin
 */

exports.getCategories = async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({ success: true, data: categories });
};

/*@desc Create category
@route POST/api/vi/categories/:id
@access Private/Admin*/

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({
        success: true,
        error: `NOTHING  WITH THAT ID ${req.params.id} TO SEE HERE`,
      });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/*@desc Create Category
@route POST/api/vi/categories
@access Private/Admin*/

exports.createCategories = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/*@desc Update Category
@route PUT/api/vi/categories/:id
@access Private/Admin*/

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!category) {
      return res.status(400).json({
        success: true,
        error: `NOTHING  WITH THAT ID ${req.params.id} TO SEE HERE`,
      });
    }

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

/*@desc Delete category
@route DELETE/api/vi/categories/:id
@access Private/Admin*/

exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({
        success: true,
        error: `NOTHING  WITH THAT ID ${req.params.id} TO SEE HERE`,
      });
    }

    await category.remove();
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
