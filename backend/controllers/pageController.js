const Page = require('../models/Page');

const createPage = async (req, res) => {
  const page = await Page.create(req.body);
  res.status(201).json({ page });
};

const getAllPages = async (req, res) => {
  const pages = await Page.find({});
  res.status(200).json({ pages, count: pages.length });
};

const getSinglePage = async (req, res) => {
  const { id: pageId } = req.params;

  const page = await Page.findOne({ _id: pageId });
  if (!page) {
    throw new Error(`No page with id: ${page} found`);
  }
  res.status(200).json({ page });
};

module.exports = { createPage, getSinglePage, getAllPages };
