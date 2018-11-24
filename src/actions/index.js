let nextWorkSubcategoryID = 0;

export const addWorkSubcategory = title => ({
    type: 'ADD_WORK_SUBCATEGORY',
    id: nextWorkSubcategoryID++,
    title
})
