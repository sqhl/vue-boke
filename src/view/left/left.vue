<template>
  <div>
    <div class="where-to-see-me">
      <whereToSee></whereToSee>
    </div>
    <div class="carousel">
      <carousel></carousel>
    </div>
    <div class="up-to-date">
      <classiFication></classiFication>
    </div>
    <div class="category">
      <Category></Category>
    </div>
    <div class="place-on-file">
      <upToFile></upToFile>
    </div>
    <div class="tag">
      <tag></tag>
    </div>
  </div>
</template>

<script>
import Category from '../../components/index/Category'
import classiFication from '../../components/index/classiFication'
import tag from '../../components/index/tag'
import upToFile from '../../components/index/upToFile'
import carousel from '../../components/index/carousel'
import whereToSee from '../../components/index/whereToSee'

export default {
  components: {
    Category,
    classiFication,
    tag,
    upToFile,
    carousel,
    whereToSee
  }
}
</script>

<style scoped>
  .where-to-see-me{
    width: 362px;
    margin-left: 20px;
    margin-top: 20px;
    height: 240px;
    box-shadow: 0px 0px 5px 0px;
  }
  .carousel{
    width: 362px;
    margin-left: 20px;
    margin-top: 10px;
    height: 480px;
    box-shadow: 0px 0px 5px 0px;
  }
  .up-to-date{
    width: 362px;
    margin-left: 20px;
    margin-top: 10px;
    height: ;
    box-shadow: 0px 0px 5px 0px;
  }
  .place-on-file{
    width: 362px;
    margin-left: 20px;
    margin-top: 10px;
    height: ;
    box-shadow: 0px 0px 5px 0px;
  }
  .place-on-file i{
    font-size: 18px;
  }
  .category{
    width: 362px;
    margin-left: 20px;
    margin-top: 10px;
    height: ;
    box-shadow: 0px 0px 5px 0px;
  }
  .tag{
    width: 362px;
    margin-left: 20px;
    margin-top: 10px;
    height: ;
    box-shadow: 0px 0px 5px 0px;
  }
</style>
