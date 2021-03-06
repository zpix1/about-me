import { Url } from "../src/Url";
import { useMemo } from "react";
import ctfHistory from '../src/data.json';

export default function Home() {
  const yearsOld = useMemo(() => {
    const now = new Date();
    const bd = new Date('March 7, 2001 12:00:00');
    const year = Math.floor(Math.abs(now - bd)  / (1000 * 60 * 60 * 24 * 365));
    if (year % 10 == 1) {
      return year + ' year';
    }
    return year + ' years';
  }, []);

  const ctfs = ctfHistory.map((ctf, i) => <span key={ctf.name} title={`Result: ${ctf.result}\nTeam: ${ctf.team}`}>
      {ctf.name}{i + 1 !== ctfHistory.length ? ', ' : ''}
    </span>);

  return (
    <>
      <div className="container">
        <div className="header">Ivan{"'"}s personal page</div>
        <div className="grid-view">
          <div className="grid-element" style={{gridArea: 'about-me'}}>
            <div className="subheader">About me</div>
            <ul>
              <li><b>Ivan Baksheev</b>, <Url url="./CV.pdf">CV</Url></li>
              <li>{yearsOld} old, Novosibirsk, Russia</li>
              <li>NSU, <Url url="https://www.nsu.ru/n/information-technologies-department/">Information Technologies Department</Url> student</li>
              <li>Main interests in <b>mathematics</b>, <b>programming</b>, <b>computer security</b></li>
            </ul>
          </div>
          <div className="grid-element" style={{gridArea: 'contacts'}}>
            <div className="subheader">Contact me</div>
            <ul>
              <li><Url url="https://t.me/zpix1">Telegram @zpix1</Url></li>
              <li><Url url="https://github.com/zpix1/">Github @zpix1</Url></li>
              <li><Url url="https://zpix1.github.io/">Personal blog</Url> (RU)</li>
              <li><Url url="https://r45.xyz">Backend server</Url></li>
              <li><Url url="https://www.linkedin.com/in/ivan-baksheev-94518a230/">LinkedIn Profile</Url></li>
            </ul>
          </div>
          <div className="grid-element" style={{gridArea: 'projects'}}>
            <div className="subheader">My projects</div>
            <ol>
              <li className="project-li"><Url url="https://mindtrainer.ru">MindTrainer</Url>
                {['js', 'Ruby On Rails'].map(tag => <div key={tag} className="badge">{tag}</div>)}
                <ul>
                  <li>A website for high school and university students to have fun and train by solving small math-related tasks</li>
                  <li>All tasks are <b>procedurally generated</b> and and are based on various mathematical concepts such as <b>graph theory</b>, <b>symmetry</b>, <b>optimization theory</b> and <b>topology</b></li>
                  <li>Was funded under the <b>presidential grants</b> program, was used by many schools across Russia</li>
                  <li>For more information about MindTrainer visit <Url url="https://zpix1.github.io/2018/12/20/MindTrainer">my blog page about it</Url> (RU), <Url url="http://diogen-nsu.ru/mind">DIOGEN School page about it</Url> (RU), check out <Url url="./mt-poster.pdf">MT's MILSET poster</Url></li>
                </ul>
              </li>
              <li className="project-li"><Url url="https://zpix1.github.io/yahtzee/">Yahtzee</Url>
                {['socket.io', 'Vue.js'].map(tag => <div key={tag} className="badge">{tag}</div>)}
                <ul>
                  <li><b>Classic dice poker</b></li>
                  <li>Various game modes (vs AI, vs Local Player, by Internet)</li>
                  <li><Url url="https://github.com/zpix1/yahtzee">Github</Url></li>
                  <li><Url url="https://zpix1.github.io/2020/03/12/Yahtzee-Updated">Blog page</Url> (RU)</li>
                </ul>
              </li>
              <li className="project-li"><Url url="https://zpix1.github.io/pechatay/#/">Pechatay</Url>
                {['socket.io', 'Vue.js'].map(tag => <div key={tag} className="badge">{tag}</div>)}
                <ul>
                  <li><b>Yet another typing trainer</b></li>
                  <li>Pleasant (for me) design, online mode, special teaching methods</li>
                  <li><Url url="https://github.com/zpix1/pechatay">Github</Url></li>
                  <li><Url url="https://zpix1.github.io/2020/12/17/Pechatay/">Blog page</Url> (RU)</li>
                </ul>
              </li>
              <li className="project-li"><Url url="https://chrome.google.com/webstore/detail/yt-anti-translate/ndpmhjnlfkgfalaieeneneenijondgag?hl=ru">Youtube Anti Translate</Url>
                {['Chrome', 'js'].map(tag => <div key={tag} className="badge">{tag}</div>)}
                <ul>
                  <li>A chrome extenstion to <b>disable youtube video titles translation</b></li>
                  <li><b>1000+</b> active users</li>
                  <li><Url url="https://github.com/zpix1/yt-anti-translate">Github</Url></li>
                  <li><Url url="https://zpix1.github.io/2018/12/25/YouTube-Anti-Translate/">Blog page</Url> (RU)</li>
                </ul>
              </li>

              <li className="project-li"><Url url="https://zpix1.github.io/vk-pm-downloader/">VK PM Downloader</Url>
                {['Vue.js'].map(tag => <div key={tag} className="badge">{tag}</div>)}
                <ul>
                  <li>Client-side VK (russian social network) private messages downloader</li>
                  <li>Nice material design, UI\UX, broad customer base</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="grid-element" style={{gridArea: 'ctf'}}>
            <div className="subheader">My CTF career</div>
            <ul>
              <li>Member of <Url url="https://ctftime.org/team/52908">YummyTacos</Url> team</li>
              <li>pwn.college belt owner: <Url url="https://pwn.college/belts">pwn.college/belts</Url> (search for <b>ib</b>)</li>
              <li>Various CTF winner and participant:{' '}
                {ctfs}
              </li>
            </ul>
            <div style={{paddingTop: 20}} className="subheader">My other projects</div>
            <ol>
              <li><Url url="https://zpix1.github.io/book-guess/">Book Guess</Url>: guess the book by it's beginning (RU)</li>
              <li><Url url="https://zpix1.github.io/rsa-idioten/">RSA Idioten</Url>: solve RSA CTF tasks easily</li>
              <li><Url url="https://zpix1.github.io/cellular-automaton-showroom/">Cellular Automaton Showroom</Url>: rule 110 and other playfield</li>
              <li><Url url="https://github.com/zpix1/Automobilist">Automobilist</Url>: C++ SFML pseudo-3d graphics racing game</li>
              <li><Url url="https://github.com/zpix1/polyomino">polyomino</Url>: set of tools to split figures into polyominos</li>
              <li><Url url="https://zpix1.github.io/webwriter">WebWriter</Url>: Vue.js and Firestore web notebook</li>

            </ol>
          </div>
        </div>
      </div>
      <style jsx>{`
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
      
          /* gap: 50px; */
      
          grid-template-areas: 
            "about-me contacts"
            "projects projects"
            "projects projects"
            "ctf ctf"
        }
        .grid-element {
          padding-bottom: 20px;
        }
      }
      
      @media (min-width:700px) { 
        .grid-view {
          display: grid;
      
          /* grid-template-columns: minmax(0, 700px); */
      
          gap: 00px 50px;
      
          grid-template-areas: 
            "about-me contacts"
            "projects ctf"
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
        padding: 1px 5px 1px 5px;
        margin: 2px;
        float: right;
      }
      
      .pseudo-a {
        text-decoration: underline;
        cursor: pointer;
      }
      `}</style>
    </>
  )
}
