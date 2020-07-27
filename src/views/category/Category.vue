<template>
<div id="category">
    <!-- <h2>分类</h2> -->
    <!-- <ul class="content">
        <li>标签名称1</li>
        <li>标签名称2</li>
        <li>标签名称3</li>
        <li>标签名称4</li>
        <li>标签名称5</li>
        <li>标签名称6</li>
        <li>标签名称7</li>
        <li>标签名称8</li>
        <li>标签名称9</li>
        <li>标签名称10</li>
        <li>标签名称11</li>
        <li>标签名称12</li>
        <li>标签名称13</li>
        <li>标签名称14</li>
        <li>标签名称15</li>
        <li>标签名称16</li>
        <li>标签名称17</li>
        <li>标签名称18</li>
        <li>标签名称19</li>
        <li>标签名称20</li>
        <li>标签名称21</li>
        <li>标签名称22</li>
        <li>标签名称23</li>
        <li>标签名称24</li>
        <li>标签名称25</li>
        <li>标签名称26</li>
        <li>标签名称27</li>
        <li>标签名称28</li>
        <li>标签名称29</li>
        <li>标签名称30</li>
        <li>标签名称31</li>
        <li>标签名称32</li>
        <li>标签名称33</li>
        <li>标签名称34</li>
        <li>标签名称35</li>
        <li>标签名称36</li>
        <li>标签名称37</li>
        <li>标签名称38</li>
        <li>标签名称39</li>
        <li>标签名称40</li>
        <li>标签名称41</li>
        <li>标签名称42</li>
        <li>标签名称43</li>
        <li>标签名称44</li>
        <li>标签名称45</li>
        <li>标签名称46</li>
        <li>标签名称47</li>
        <li>标签名称48</li>
        <li>标签名称49</li>
        <li>标签名称50</li>
        <li>标签名称51</li>
        <li>标签名称52</li>
        <li>标签名称53</li>
        <li>标签名称54</li>
        <li>标签名称55</li>
        <li>标签名称56</li>
        <li>标签名称57</li>
        <li>标签名称58</li>
        <li>标签名称59</li>
        <li>标签名称60</li>
        <li>标签名称61</li>
        <li>标签名称62</li>
        <li>标签名称63</li>
        <li>标签名称64</li>
        <li>标签名称65</li>
        <li>标签名称66</li>
        <li>标签名称67</li>
        <li>标签名称68</li>
        <li>标签名称69</li>
        <li>标签名称70</li>
        <li>标签名称71</li>
        <li>标签名称72</li>
        <li>标签名称73</li>
        <li>标签名称74</li>
        <li>标签名称75</li>
        <li>标签名称76</li>
        <li>标签名称77</li>
        <li>标签名称78</li>
        <li>标签名称79</li>
        <li>标签名称80</li>
        <li>标签名称81</li>
        <li>标签名称82</li>
        <li>标签名称83</li>
        <li>标签名称84</li>
        <li>标签名称85</li>
        <li>标签名称86</li>
        <li>标签名称87</li>
        <li>标签名称88</li>
        <li>标签名称89</li>
        <li>标签名称90</li>
        <li>标签名称91</li>
        <li>标签名称92</li>
        <li>标签名称93</li>
        <li>标签名称94</li>
        <li>标签名称95</li>
        <li>标签名称96</li>
        <li>标签名称97</li>
        <li>标签名称98</li>
        <li>标签名称99</li>
        <li>标签名称100</li>
    </ul> -->
    <category-nav-bar/>
    <div class="content">
        <tab-menu :categories="categories" @selectItem="selectItem"/>
        <scroll id="tab-content">
            <div>
                <tab-content-category :subcategories="showSubcategory"></tab-content-category>
                <tab-control :titles="['综合','新品','销量']" @tabClick="itemClick"></tab-control>
                <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
            </div>
        </scroll>
    </div>
</div>
</template>

<script>
import TabControl from 'components/content/tabControl/TabControl'

import Scroll from 'components/common/scroll/Scroll'
import CategoryNavBar from './childComps/CategoryNavBar'
import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'
import TabContentDetail from './childComps/TabContentDetail'

import {getCategory, getSubcategory, getCategoryDetail} from "@/network/category";
import {POP, SELL, NEW} from "@/common/const";
import {tabControlMixin} from "@/common/mixin";

export default {
name: 'Category',
components: {
    Scroll,
    CategoryNavBar,
    TabMenu,
    TabContentCategory,
    TabContentDetail,
    TabControl
},
mixins: [tabControlMixin],
data() {
return {
    categories: [],
    categoryData: {},
    currentIndex: -1,
    currentType: POP
};
},
created() {
    // 1.请求分类数据
    this._getCategory()
},
computed: {
    showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
        if (this.currentIndex === -1)  return []
        return this.categoryData[this.currentIndex].categotyDetail[this.currentType]
    }
},
methods: {
    /**-------------=================  业务逻辑相关  =================------------- */
    selectItem(index) {
        this._getSubcategories(index)
    },
    itemClick(index) {
        this.currentType = [POP,NEW,SELL][index]
    },
    /**-------------=================  网络请求方法  =================------------- */
    _getCategory() {
        getCategory().then(res => {
            console.log('getCategory',res)
            // 1.获取分类数据
            this.categories = res.data.category.list

            // 2.初始化每个类别的子数据
            for (let i = 0; i < this.categories.length; i++) {
                this.categoryData[i] = {
                    subcategories: {},
                    categotyDetail: {
                        'pop' : [],
                        'new': [],
                        'sell': []
                    }
                }
            }

            // 3.请求第一个分类的数据
            this._getSubcategories(0)
        })
    },
    _getSubcategories(index) {
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
            console.log('_getSubcategories',res)
            this.categoryData[index].subcategories = res.data
            this.categoryData = {...this.categoryData}
            this._getCategoryDetail(POP)
            this._getCategoryDetail(SELL)
            this._getCategoryDetail(NEW)
        })
    },
    _getCategoryDetail(type) {
        // 1.请求miniWallKey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey

        // 2.发送请求, 传入miniWallKey和type
        getCategoryDetail(miniWallkey, type).then(res => {
            // 3.将获取的数据保存下来
            this.categoryData[this.currentIndex].categotyDetail[type] = res
            this.categoryData = {...this.categoryData}
        })
    }
},
}
</script>

<style scoped>
#category {
    height: 100vh;
}

.content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
}

#tab-content {
    height: 100%;
    flex: 1;
}
</style>