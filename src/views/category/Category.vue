<template>
<div class="wrapper" ref="wrapper">
    <!-- <h2>分类</h2> -->
    <ul class="content">
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
    </ul>
</div>
</template>

<script>
import BSroll from 'better-scroll'
export default {
name: 'Category',
components: {},
data() {
return {
    scroll: null
};
},
methods: {

},
mounted() {
    this.scroll = new BSroll(this.$refs.wrapper,{})
}
}
</script>

<style scoped>
.wrapper {
    height: 150px;
    background: red;
    overflow: hidden;
}
</style>