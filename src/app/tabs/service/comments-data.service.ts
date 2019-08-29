import {Injectable} from '@angular/core';
import {CommentsModel} from '../components/comments/model/comments-model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {

  homeCommentsData: CommentsModel = {
    header: '#LookingForAJob - YOU CAN HAVE ME !!!',
    commentItems: [
      {
        imgSource: '../../../../assets/superman.png',
        heroName: 'Superman',
        heroExtraInfo: '@CryptoniteVendor',
        comment: 'Oh la la, Pavel is available and more ready than ever. Before 3 years he started programming ' +
          'simply because it is more interesting than picking in a warehouse ( AND PAID BETTER :D).' +
          ' After 2 years he got his first commercial job in international company AFS visicom.'
      },
      {
        imgSource: '../../../../assets/thor.png',
        heroName: 'Thor',
        heroExtraInfo: '@IWearAsterixsHelm',
        comment: 'YES !!! In his first serious job it seemed he was hired by mistake :D They needed Angular guru with strong ' +
          'C# knowledge. Believe it or not, Pavel survived trial and learned sooooo much in following more than year !!! '
      },
      {
        imgSource: '../../../../assets/hulk.png',
        heroName: 'Happy Hulk',
        heroExtraInfo: '@PavelLikesMe',
        comment: 'After a year and 27 days his journey suddenly ended because of company restructuralization. Is it a sad story ?' +
          ' Yes and no :). They gave him the most important thing in his new career. They gave him a first chance and tons of new' +
          ' habits, opinions and helped him think more like a programmer. If he can not write code for them anymore, can do it for you :) '
      }
    ]
  };
  private aboutCommentsData: CommentsModel = {
    header: '#Pavel\'sDetailBioCharacteristics',
    commentItems: [
      {
        imgSource: '../../../../assets/hellboy.png',
        heroName: 'HellBoy',
        heroExtraInfo: '@ArmWrestlingChampion',
        comment: 'I am not sure where exactly he was born but Chuck Norris his older* twin said he was born in a beautiful ' +
          'historical city in the south of Czechia called Cesky Krumlov. After Czechia he tried England and know he is happy at Slovakia' +
          ' - Bratislava.'
      },
      {
        imgSource: '../../../../assets/logan.png',
        heroName: 'Logan',
        heroExtraInfo: '@ThisIsNotEyebrows',
        comment: 'You said England ? Sooo it means Pavel can CRUD and even imagine in English? It\'s a good question... ' +
          'Everything on this page has been written by Pavel without any help, just from heart. So this is his English.'
      },
      {
        imgSource: '../../../../assets/shadowcat.png',
        heroName: 'ShadowCat',
        heroExtraInfo: '@FakeAccount',
        comment: 'Is Pavel arrogant, egoistic, rude, unfriendly bastard ? He was maybe arrogant enough to try to be a cool programmer, ' +
          'but it was top of his audacity. He is actually very friendly, talkative, kind of retard in a good way. Mostly people like him :)'
      }
    ]
  };
  private knowledgeCommentsData: CommentsModel = {
    header: '#WhatIsInsidePavel\'sSkull',
    commentItems: [
      {
        imgSource: '../../../../assets/tiger.png',
        heroName: 'TheTiger',
        heroExtraInfo: '@thePoohNeverDie',
        comment: 'Pavel\'s journey started at late 2015 with C#. Damn it was first sight love he said.' +
          ' Modern highLevel language with garbage collector, fully supported, further developed and the IDE ?' +
          ' No problem there :)'
      },
      {
        imgSource: '../../../../assets/lion.png',
        heroName: 'MrLion',
        heroExtraInfo: '@SeriousGuy',
        comment: 'Two years ago i said to him: \"World is not only about your C#. The web is the future. If you like Microsoft' +
          ' technologies, so be it - ASP.NET could be your destiny.\" BUT !!! Before Pavel even started with grinding ASP.NET his first' +
          ' employer decided. Your destiny in our company will be ANGULAR !!! so be it :) His biggest experience now is with Angular.'
      },
      {
        imgSource: '../../../../assets/kitty.png',
        heroName: 'Kitty',
        heroExtraInfo: '@Rrrrrrrrrr',
        comment: 'So yes, if you need Angular right now, Pavel is ideal for you. If you need something slightly different, you can ' +
          'have it after short period of time :) The first Pavel\'s employer had it hard, there was so much information for a new ' +
          'programmer. You will have it much more easier and can enjoy his productivity.'
      }
    ]
  };
  private questionsCommentsData: CommentsModel = {
    header: '#IfYouWannaKnowMoreJustAsk4More',
    commentItems: [
      {
        imgSource: '../../../../assets/turtle.png',
        heroName: 'LadyTurtle',
        heroExtraInfo: '@IHaveATimeMate',
        comment: 'Pavel is like me - patient and persistent. Step by step, day by day. In last company there was one thing which he was ' +
          'not happy about. It was big, BIG brake in his skill development and source of frustration. There was not any senior' +
          ' for him, any adviser, no one reviewed his code. It was so hard to be sure if his way' +
          ' was the best way how to complete his tasks. Now if he could choose: he would rather start as a junior with supervision, than ' +
          'as a developer without any feedback.'
      },
      {
        imgSource: '../../../../assets/seahorse.png',
        heroName: 'SiiiHorse',
        heroExtraInfo: '@canIseeATiger',
        comment: 'I don\'t know why no one said it. Pavel has IT education in Czechia called Electronic PC systems (programming ' +
          '& networks). After graduation, he decided not to study further bla bla bla... In the end, the life was not as funny without ' +
          'any knowledge as he thought :P Become a cool programmer with relevant knowledge is his biggest project now.'
      },
      {
        imgSource: '../../../../assets/whitetiger.png',
        heroName: 'WhiteTiger',
        heroExtraInfo: '@ShowMustGoOn',
        comment: 'Pavel\'s big advantage is: He wants to write code because without it the entire project of his life change is fail. ' +
          'For him be a programmer is not a matter of course. It\'s like a climax and reward after all these years.'
      }
    ]
  };
  private passionsCommentsData: CommentsModel = {
    header: '#UnderCostruction',
    commentItems: [
      {
        imgSource: '../../../../assets/agent.png',
        heroName: 'AgentSmith',
        heroExtraInfo: '@010101010100',
        comment: 'Hey, yo... Yes yo fancyGirl next to me. This is a bra what you have on your head ? :D :D :D :D :D'
      },
      {
        imgSource: '../../../../assets/girl.png',
        heroName: 'YourMother',
        heroExtraInfo: '@UWishBro',
        comment: 'Yes agent Smith, this is a bra... (phoneCall: "Ehm, Neo ? ... one of your monkeys is trying to be funny, can you do ' +
          'something with it? ty mate")  ...shocking manners'
      },
      {
        imgSource: '../../../../assets/soda.png',
        heroName: 'SodaCap',
        heroExtraInfo: '@PinocchioIsNotAHumanAsWell',
        comment: '... Bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, bubbly, ' +
          'bubbly, bubbly, bubbly, bubbly, bubbly, bubbly...'
      }
    ]
  };

  getCommentsForHome(): Observable<CommentsModel> {
    return of(this.homeCommentsData);
  }

  getCommentsForKnowledge(): Observable<CommentsModel> {
    return of(this.knowledgeCommentsData);
  }

  getCommentsForAbout(): Observable<CommentsModel> {
    return of(this.aboutCommentsData);
  }

  getCommentsForQuestions(): Observable<CommentsModel> {
    return of(this.questionsCommentsData);
  }

  getCommentsForPassions(): Observable<CommentsModel> {
    return of(this.passionsCommentsData);
  }
}
