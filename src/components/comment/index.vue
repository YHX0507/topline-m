<template>
  <van-cell class="comment-item">
    <!-- 评论作者头像 -->
    <van-image
      slot="icon"
      class="avatar"
      round
      :src="comment.aut_photo"
    />
    <!-- 评论作者头像 -->

    <!-- 评论作者名字 -->
    <span style="color: #466b9d;" slot="title">{{comment.aut_name}}</span>
    <!-- 评论作者名字 -->

    <div slot="label">
      <!-- 评论内容 -->
      <p style="color: #363636;">{{comment.content}}</p>
      <!-- /评论内容 -->

      <p>
        <!-- 评论发布日期 -->
        <span style="margin-right: 10px;">{{comment.pubdate | transTime}}</span>
        <!-- 评论发布日期 -->

        <van-button
          size="mini"
          type="default"
          @click="$emit('open',comment)"
        >回复{{comment.reply_count}}</van-button>
      </p>
    </div>
    <div
    slot="right-icon"
    class="like-container"
    @click="onLike"
    >
      <van-icon
        :color="comment.is_liking ? '#e5645f' : ''"
        :name="comment.is_liking?'good-job':'good-job-o'"
      />
      <span>{{comment.like_count?comment.like_count:'赞'}}</span>
    </div>
  </van-cell>
</template>

<script>
import { addLike, deleteLike } from '@/api/comment'
export default {
  name: 'CommentList',
  data () {
    return {
    }
  },
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  methods: {
    async onLike () {
      try {
        if (this.comment.is_liking) {
          await deleteLike(this.comment.com_id)
          this.comment.like_count--
        } else {
          await addLike(this.comment.com_id)
          this.comment.like_count++
        }
        this.comment.is_liking = !this.comment.is_liking
      } catch (error) {
        console.log(error)
        this.$toast.fail('操作失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.comment-item {
  display: flex;
  align-items: flex-start;
  .avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .like-container {
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>
