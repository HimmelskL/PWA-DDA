class AppURL{
    static BaseURL = "http://127.0.0.1:8000/api"
    static AllCategoryDetails = this.BaseURL+"/allcategory"


    static ProductListByCategory(category){
        return this.BaseURL+"/productlistbycategory/"+category;
    }

    static ProductListBySearch(searchkey){
        return this.BaseURL+"/search/"+searchkey;
    }
}

export default AppURL