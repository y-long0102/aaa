const base = {
    baseUrl:"/api",
    basePrductUrl:"/product_api",
    baseContentUrl:"/content_api",
    baseSearchUrl:"/search_api",
    login:"/api/login",              // 登陆地址
    prodcutList:"/backend/item/selectTbItemAllByPage", // 商品列表地址
    selectItemCategoryByParentId:"/backend/itemCategory/selectItemCategoryByParentId", // 类目选择地址
    insertTbItem:"/backend/item/insertTbItem",    // 商品添加地址
    groupParamData:'/backend/itemParam/selectItemParamByItemCatId',  // 添加规格参数地址
    deleteItemById:"/backend/item/deleteItemById", // 商品删除地址
    preUpdateItem: "/backend/item/preUpdateItem",  // 预更新商品地址
    updateProduct: '/backend/item/updateTbItem',   // 修改商品信息地址
    selectItemParamAll:"/backend/itemParam/selectItemParamAll",   // 规格参数查询地址
    insertItemParam: '/backend/itemParam/insertItemParam',   // 规格参数添加地址
    deleteItemParamById:"/backend/itemParam/deleteItemParamById", // 规格参数删除地址
    selectContentCategoryByParentId:"/content/selectContentCategoryByParentId", // 分类内容管理 查询地址
    insertContentCategory:"/content/insertContentCategory",  // 内容分类管理 添加接口
    deleteContentCategoryById:"/content/deleteContentCategoryById",  // 内容分类管理 删除接口
    updateContentCategory:"/content/updateContentCategory",  // 内容分类管理 修改接口
    selectTbContentAllByCategoryId:"/content/selectTbContentAllByCategoryId",  // 内容管理  查询接口
    insertTbContent:"/content/insertTbContent", // 内容管理  添加接口
    deleteContentByIds:"/content/deleteContentByIds" , // 内容管理  删除接口
    importAll:"/frontend/searchItem/importAll" // 一键导入商品数据到索引库
}

export default base;