<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <p id="input1">
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
      </p>

      <h3 id="input2">Input Test</h3>

      <ul>
        <button id="editButton" @click="onClickEdit">수정</button>
        <router-link to="/page">앞으로</router-link>
      </ul>
  </div>
</template>

<script>
import $ from "jquery"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return{
      editSentence: '',
      editText: '',
    }
  },

  created(){
    window.onClickSave = this.onClickSave
    window.onClickEdit = this.onClickEdit
  },

  methods:{
    onClickEdit(){
      const inputText1 = $('#input1').text()
      const inputText2 = $('#input2').text()

      const input1 = document.getElementById('input1')
      input1.outerHTML = '<textarea id="text1" rows="20" cols="100" placeholder="'+ inputText1 + '"></textarea><br/>'

      const input2 = document.getElementById('input2')
      input2.outerHTML = '<input id="text2" placeholder="'+ inputText2 + '"/>'

      const editButton = document.getElementById("editButton")
      editButton.outerHTML = '<button id="saveButton" onclick="onClickSave(\'' + inputText1 + '\', \'' +  inputText2 + '\')">저장</button>'
    },

    onClickSave(inputText1, inputText2){
      console.log('Sentence : ', $('#text1').val())
      console.log('Text : ', $('#text2').val())

      alert("저장이 완료되었습니다!!")

      document.getElementById("text1").outerHTML ='<p id="input1">' + inputText1 + '</p>'
      document.getElementById("text2").outerHTML ='<h3 id="input2">' + inputText2 + '</h3>'
      document.getElementById("saveButton").outerHTML = '<button id="editButton" onclick="onClickEdit()">수정</button>'

    },

    onClickForward(){

    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
