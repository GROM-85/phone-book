const phoneBookSelectors = {
    getContacts: state => state.phoneBook.contacts,
    getIsLoading:state => state.phoneBook.isLoading,
    getIsLoadingForm: state => state.phoneBook.isLoadingForm,
    getIsLoadingDelete: state => state.phoneBook.isLoadingDelete,
    getError: state => state.phoneBook.error,
    getFilter:state=>state.phoneBook.filter,
    getActiveId:state=>state.phoneBook.activeId,
};
export default phoneBookSelectors;