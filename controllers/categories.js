const Category = require("./../models/Category");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");

/**method for endpoints
 *
 * @desc GET categories
 * @route GET api/v1/categories
 * @access Private/Admin
 */

exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({ success: true, data: categories });
});

/*@desc GET category
@route GET/api/vi/categories/:id
@access Private/Admin*/

exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(
      new ErrorResponse(
        `NOTHING  WITH THAT ID ${req.params.id} TO SEE HERE`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: category });
});

/*@desc Create Category
@route POST/api/vi/categories
@access Private/Admin*/

exports.createCategories = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);

  res.status(200).json({ success: true, data: category });
});

/*@desc Update Category
@route PUT/api/vi/categories/:id
@access Private/Admin*/

exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    context: "query",
  });

  if (!category) {
    return next(
      new ErrorResponse(
        `NOTHING  WITH THAT ID ${req.params.id} TO SEE HERE`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: category });
});

/*@desc Delete category
@route DELETE/api/vi/categories/:id
@access Private/Admin*/

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(
      new ErrorResponse(
        `NOTHING  WITH THAT ID ${req.params.id} TO SEE HERE`,
        404
      )
    );
  }

  await category.remove();
  res.status(200).json({ success: true, data: category });
});
