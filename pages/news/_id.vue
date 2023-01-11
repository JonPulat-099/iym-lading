<template>
  <div class="details__news">
    <div class="header">
      <img src="/news/news__id.png" alt="" />
      <p class="header__text">Заголовок примерного блока в две строки 1</p>
    </div>

    <div class="details__content container">
      <div class="route__path">
        <a href="#"> Главная </a>
        <a href="#"> / блог </a>
        <a href="#"> / Что нового </a>
        <a href="#"> / Visa Platinum </a>
      </div>

      <h2 class="details__title">О карте</h2>
      <p class="subtitle">
        Оформляя престижную карту Visa Platinum Black, перед вами открывается
        масса преимуществ во время путешествий. Кроме этого Вам будут
        предоставлены преимущества при покупках, к примеру при задержке багажа -
        Вам будут компенсированы Ваши расходы в связи с его ожиданием, при
        утере/порче купленного товара - будет выплачено страховое возмещение, а
        также предоставлена продленная гарантия на товар. С полным описанием
        тарифа по карте можно ознакомиться в разделе тарифы.
      </p>
      <h2 class="details__title">Выбор и заказ карты</h2>
      <p class="subtitle">
        С главного экрана мобильного приложения (если Вы хотите выпустить себе
        карту с использованием смартфона), нужно выбрать "Карты", выбрать «+» и
        заказать нужную вам карту. Также заказать можно тут на странице нажав на
        кнопку "Заказать" выше. После ознакомления с условиями открытия карты,
        нужно выбрать "заказать". Вам придет оповещение о том, что заказ принят
        к обработке. Через несколько часов придет Push-уведомление о готовности
        карты и адрес, где можно забрать карту. Детальную информацию о карте
        можно посмотреть в мобильном приложении. Пароль предоставленный в
        конверте может быть заменен на любой другой через ближайший банкомат.
        Безопасность Ваших средств обеспечивается сервисом 3d secure. Для
        настройки сервиса пройдите в меню карты и в настройках безопасности
        установите 6-значный код безопасности.
      </p>

      <v-img height="400" width="400" src="/news/sale.png" class="mb-7"></v-img>
      <h2 class="details__title">Как оформить карту в офисе</h2>
      <p class="subtitle">
        Через несколько часов придет Push-уведомление о готовности карты и
        адрес, где можно забрать карту. Детальную информацию о карте можно
        посмотреть в мобильном приложении. Пароль предоставленный в конверте
        может быть заменен на любой другой через ближайший банкомат.
        Безопасность Ваших средств обеспечивается сервисом 3d secure. Для
        настройки сервиса пройдите в меню карты и в настройках безопасности
        установите 6-значный код безопасности.
      </p>

      <center><h2 class="details__title">Эта статья была полезной?</h2></center>
      <center class="answer">
        <div>
          <button>Да</button>
          <button>Нет</button>
        </div>
        <div class="statistics">42 из 49 считают эту статью полезной</div>
      </center>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <p>Оставить комментарии</p>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-layout row wrap justify-space-between align-center>
              <v-flex lg6 pa-3>
                <v-text-field
                  class="comment__input"
                  placeholder="Имя"
                  outlined
                  depressed
                  autocomplete="off"
                  required
                  autofocus
                  color="#3D9A73"
                  validate-on-blur
                ></v-text-field>
              </v-flex>
              <v-flex lg6 pa-3>
                <v-text-field
                  class="comment__input"
                  placeholder="E-mail"
                  outlined
                  depressed
                  required
                  autocomplete="off"
                  color="#3D9A73"
                  validate-on-blur
                ></v-text-field>
              </v-flex>
              <v-flex lg12 xs12 ma-3>
                <v-textarea
                  class="comment__textarea"
                  placeholder="Введите Ваше комментарии"
                  outlined
                  depressed
                  required
                  autocomplete="off"
                  color="#3D9A73"
                  validate-on-blur
                ></v-textarea>
              </v-flex>
              <v-flex lg5 pa-3>
                <v-checkbox v-model="checkbox" color="#3D9A73" validate-on-blur>
                  <template #label>
                    Я хочу получать рассылку новостей
                  </template>
                </v-checkbox>
              </v-flex>
              <v-flex lg5 pa-3>
                <v-btn outline>Отправить комментарии</v-btn>
              </v-flex>
            </v-layout>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="comments">
        <div v-for="com in comments" :key="com.id" class="comment">
          <div class="comment__content">
            <span class="line"></span>
            <p class="user"> {{ com.user }} </p>
            <p class="comment__date"> {{ com.date }} </p>
            <p class="comment__text"> {{ com.text }} </p>
          </div>
          <button class="reply">
            <img src="/icons/reply.svg" alt="" /> Ответить
          </button>
          <v-expansion-panels v-if="com.count_answers" accordion class="round-xl">
            <v-expansion-panel>
              <v-expansion-panel-header
                >Показать  {{ com.count_answers }}  ответа</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <div v-for="a in com.answers" :key="a.id" class="comment">
                  <span v-if="a.nickname" class="nickname"> {{ a.nickname }} </span>
                  <div class="comment__content">
                    <p class="user"> {{ a.user }} </p>
                    <p class="comment__date"> {{ a.data }} </p>
                    <p class="comment__text"> {{ a.text }} </p>
                  </div>
                  <button class="reply">
                    <img src="/icons/reply.svg" alt="" /> Ответить
                  </button>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="answers"></div>
      </div>
    </div>

    <app-card></app-card>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  components: {
    appCard: () => import('@/components/card/CardApp'),
  },
  data: () => ({
    checkbox: false,
    comments: [
      {
        id: '12343',
        user: 'Gerard Butler',
        date: '12 Август 2021 (12:06)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur incididunt ut labore et eiusmod tempor Lorem ipsum dolor sit amet, consectetur incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur incididunt ut labore et eiusmod tempor.',
        count_answers: 0,
        answers: [],
      },
      {
        id: '125',
        user: 'Mister Smith',
        date: '12 Август 2021 (12:09)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur incididunt ut labore et eiusmod tempor Lorem ipsum dolor sit amet, consectetur incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur incididunt ut labore et eiusmod tempor.',
        count_answers: 2,
        answers: [
          {
            id: '1324',
            user: 'Mister Smith',
            nickname: '',
            date: '12 Август 2021 (12:10)',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur incididunt ut labore et eiusmod tempor Lorem ipsum dolor sit amet, consectetur incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          },
          {
            id: '1324',
            user: 'Willard Carroll "Will" Smith, Jr.',
            nickname: '@Bradley Charles Cooper ',
            date: '12 Август 2021 (12:18)',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur incididunt ut labore et eiusmod tempor Lorem ipsum dolor sit amet, consectetur incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          },
        ],
      },
      {
        id: '1234378',
        user: 'Mark Robert Michael Wahlberg',
        date: '12 Август 2021 (12:52)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur incididunt ut labore et eiusmod tempor Lorem ipsum dolor sit amet, consectetur incididunt ut labore Lorem ipsum.',
        count_answers: 0,
        answers: [],
      },
    ],
  }),
}
</script>
<style lang="scss" src="~/assets/scss/_news_detail.scss"></style>
