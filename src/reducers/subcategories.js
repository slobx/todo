const subcategory = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WORK_SUBCATEGORY':
            return [
                ...state,
                {
                    id:action.id,
                    title:action.title
                }
            ]

        default:
            return state
    }
};

export default subcategory