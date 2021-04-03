<template>
<div class="container">
  <div class="header">Ivan's personal page</div>
  <div class="grid-view">
    <div class="grid-element" style="grid-area: about-me">
      <div class="subheader">About me</div>
      <ul>
        <li><b>Ivan Baksheev</b></li>
        <li>{{ yearsOld }} old</li>
        <li>NSU, <Url url="https://www.nsu.ru/n/information-technologies-department/">Information Technologies Department</Url> student</li>
        <li>Main interests in <b>mathematics</b>, <b>programming</b>, <b>computer security</b></li>
      </ul>
    </div>
    <div class="grid-element" style="grid-area: contacts">
      <div class="subheader">Contact me</div>
      <ul>
        <li><Url url="https://t.me/zpix1">Telegram @zpix1</Url></li>
        <li><Url url="https://github.com/zpix1/">Github @zpix1</Url></li>
        <li><Url url="https://zpix1.github.io/">Personal blog</Url> (RU)</li>
        <li><Url url="https://r45.xyz">Backend server</Url></li>
        <li>
          <div v-if="showEmail">
            <Url :url="'mailto:' + email">{{ email }}</Url>
          </div>
          <div v-else>
            <div class="pseudo-a" @click="showEmail = true">&lt;show email&gt;</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="grid-element" style="grid-area: projects">
      <div class="subheader">My projects</div>
      <ol>
        <li class="project-li"><Url url="https://mindtrainer.ru">MindTrainer</Url>
            <div class="badge" v-for="e in ['js', 'Ruby On Rails']" :key="e">{{ e }}</div>
          <ul>
            <li>A website for high school and university students to have fun and train by solving small math-related tasks</li>
            <li>All tasks are <b>procedurally generated</b> and and are based on various mathematical concepts such as <b>graph theory</b>, <b>symmetry</b>, <b>optimization theory</b> and <b>topology</b></li>
            <li>Was funded under the <b>presidential grants</b> program, was used by many schools across Russia</li>
            <li>For more information about MindTrainer visit <Url url="https://zpix1.github.io/2018/12/20/MindTrainer">my blog page about it</Url> (RU), <Url url="http://diogen-nsu.ru/mind">DIOGEN School page about it</Url> (RU), check out <Url url="./mt-poster.pdf">MT's MILSET poster</Url></li>
          </ul>
        </li>
        <li class="project-li"><Url url="https://zpix1.github.io/yahtzee/">Yahtzee</Url>
            <div class="badge" v-for="e in ['socket.io', 'Vue.js']" :key="e">{{ e }}</div>
          <ul>
            <li><b>Classic dice poker</b></li>
            <li>Various game modes (vs AI, vs Local Player, by Internet)</li>
            <li><Url url="https://github.com/zpix1/yahtzee">Github</Url></li>
            <li><Url url="https://zpix1.github.io/2020/03/12/Yahtzee-Updated">Blog page</Url> (RU)</li>
          </ul>
        </li>

        <li class="project-li"><Url url="https://zpix1.github.io/pechatay/#/">Pechatay</Url>
            <div class="badge" v-for="e in ['socket.io', 'Vue.js']" :key="e">{{ e }}</div>
          <ul>
            <li><b>Yet another typing trainer</b></li>
            <li>Pleasant (for me) design, online mode, special teaching methods</li>
            <li><Url url="https://github.com/zpix1/pechatay">Github</Url></li>
            <li><Url url="https://zpix1.github.io/2020/12/17/Pechatay/">Blog page</Url> (RU)</li>

          </ul>
        </li>

        <li class="project-li"><Url url="https://chrome.google.com/webstore/detail/yt-anti-translate/ndpmhjnlfkgfalaieeneneenijondgag?hl=ru">Youtube Anti Translate</Url>
            <div class="badge" v-for="e in ['Chrome', 'js']" :key="e">{{ e }}</div>
          <ul>
            <li>A chrome extenstion to <b>disable youtube video titles translation</b></li>
            <li><b>100+</b> active users</li>
            <li><Url url="https://github.com/zpix1/yt-anti-translate">Github</Url></li>
            <li><Url url="https://zpix1.github.io/2018/12/25/YouTube-Anti-Translate/">Blog page</Url> (RU)</li>
          </ul>
        </li>

        <li class="project-li"><Url url="https://zpix1.github.io/vk-pm-downloader/">VK PM Downloader</Url>
            <div class="badge" v-for="e in ['Vue.js']" :key="e">{{ e }}</div>
          <ul>
            <li>Client-side VK (russian social network) private messages downloader</li>
            <li>Nice material design, UI\UX, broad customer base</li>
          </ul>
        </li>
      </ol>
    </div>
    <div class="grid-element" style="grid-area: ctf">
      <div class="subheader">My CTF career</div>
      <ul>
        <li>Member of <Url url="https://ctftime.org/team/52908">YummyTacos</Url> team</li>
        <li>pwn.college belt owner: <Url url="https://pwn.college/belts">pwn.college/belts</Url> (search for <b>ib</b>)</li>
        <li>Various CTF winner and participant (Ugra CTF 2020, Unicorn CTF 2020, VKA CTF 2020, Cyberchallenge, SPB CTF 2021, Volga CTF Quals 2021)</li>
      </ul>
    </div>
    <div class="grid-element" style="grid-area: other projects">
      <div class="subheader">My other projects</div>
      <ol>
        <li><Url url="https://zpix1.github.io/book-guess/">Book Guess</Url>: guess the book by it's beginning (RU)</li>
        <li><Url url="https://zpix1.github.io/rsa-idioten/">RSA Idioten</Url>: solve RSA CTF tasks easily</li>
        <li><Url url="https://zpix1.github.io/cellular-automaton-showroom/">Cellular Automaton Showroom</Url>: rule 110 and other playfield</li>
        <li><Url url="https://github.com/zpix1/Automobilist">Automobilist</Url>: C++ SFML pseudo-3d graphics racing game</li>
        <li><Url url="https://github.com/zpix1/polyomino">polyomino</Url>: set of tools to split figures into polyominos</li>
        <li><Url url="https://zpix1.github.io/webwriter">WebWriter</Url>: Vue.js ans Firestore web notebook</li>

      </ol>
    </div>
  </div>
</div>
</template>

<script>
import Url from './components/Url.vue'

export default {
  name: 'App',
  components: {
    Url
  },
  data: function () {
    return {
      showEmail: false,
      email: atob('ZGN6cGl4QGdtYWlsLmNvbQ==')
    }
  },
  computed: {
    yearsOld: function () {
      let now = new Date();
      let bd = new Date('March 7, 2001 12:00:00');
      let year = Math.floor(Math.abs(now - bd)  / (1000 * 60 * 60 * 24 * 365));
      if (year % 10 == 1) {
        return year + ' year';
      }
      return year + ' years';
    }
  }
}
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  font-size: 1.5em;
  font-weight: 700;
  padding-bottom: 20px;
}


@media (min-width:320px) { 
  .grid-view {
    display: grid;

    /* grid-template-columns: minmax(0, 700px); */

    gap: 50px;

    grid-template-areas: 
      "about-me contacts"
      "projects projects"
      "projects projects"
      "other-projects other-projects"
      "ctf ctf"
  }
}

@media (min-width:700px) { 
  .grid-view {
    display: grid;

    /* grid-template-columns: minmax(0, 700px); */

    gap: 50px;

    grid-template-areas: 
      "about-me contacts"
      "projects ctf"
      "projects other-projects"
      "projects other-projects"
  }
}

.grid-element {
  /* padding: 5px; */
  max-width: 650px;
  text-align: left;
}

.grid-element .subheader {
  font-size: 1.2em;
  font-weight: 600;
  padding-bottom: 5px;
}

ul, ol {
  padding-left: 20px;
  margin: 0;
  list-style-type: square;
  /* margin-left: 4px; */
}

b {
  font-weight: 650;
}

.project-li {
  padding-bottom: 10px;
}

.badge {
  display: inline;
  font-size: 0.8em;
  border: 1px solid black;
  border-radius: 2px;
  padding: 1px;
  margin: 2px;
  float: right;
}

.pseudo-a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
