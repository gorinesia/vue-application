<template>
  <div>
    <TextBox />
    <div class="devider"></div>
    <MessageList :messages="messages($route.params.channelId)" />
    <Spinner v-if="isLoading" />
    <p class="no-messages" v-else-if="messages($route.params.channelId).length === 0">投稿データ0件</p>
    <MessageList v-else :messages="messages($route.params.channelId)" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'; 

import TextBox from '@/components/TextBox';
import MessageList from '@/components/MessageList';
import Spinner from '@/components/Spinner';

export default {
  components: { 
    TextBox,
    MessageList,
    Spinner
  },
  computed: {
    ...mapGetters({
      messages: 'channels/getChannelMessages'
    }),
    isLoading() {
      return this.$store.state.channels.loading.messages;
    }
  },
  async created() {
    await this.fetchMessages();
  },
  methods: { 
    addMessage(message) {
      this.messages.push(message )
    },
    async fetchMessages() {
      const payload = {
        channelId: this.$route.params.channelId
      };

      try {
        this.$store.dispatch('channels/fetchChannelMessages', payload);
      } catch (error) {
        alert(error.message);
      }
    }
  },
  watch: {
    '$route': async function() {
      await this.fetchMessages();
    }
  }
}
</script>

<style scoped>
.devider {
  border-top: 10px solid #ccc;
}

.no-messages {
  text-align: center;
}
</style>