**`git clone https://github.com/LexaLukivka/InCode_Lunch-menu_Backend`**
(releas branch) она идет по default

**`npm install`**


**`git clone https://github.com/LexaLukivka/InCode_Lunch-menu`**
(releas branch) она идет по default

**`npm install`**

Запустить Mongo \
Если есть Collection под названием incode удалить её. 
Так как там может содержаться не мои данные и проект не сможет сработать. 

Back end (InCode_Lunch-menu_Backend) **`npm start`** or **`npm run dev`**

Front end (InCode_Lunch-menu) **`npm start`**

После запуска двух проектов следует добавить меню и блюда. \
Для добавления меню и блюд нужно пройти все этапы инструкции:
1. Оставить 1 открытое окно в брузере. Остальные позакрывать.
2. Зайти на оставшееся окно, и открыть консоль, и перейти в Application -> localStorage 
и удалить все составляющие
3. Перейти в Front end (InCode_Lunch-menu) и перейти _`src/redux/action/load.action`_ 
раскомментировать 37 и 38 строчки  `Menu.addMenu()` и `Menu.addDishes()`
4. Обновить 1 раза страницу
5. После обновления обратно закоментировать 37 и 38 строчку



Пользователь не сможет пользоваться сайтом пока не прошел Verification Page http://localhost:3000/verifyEmail\
Администратором становится первый зарегистрировавщийся пользователь

При выборе нужных блюд в Admin Page пользователь может увидеть эти изменения на Home Page 
после обновления страницы

Если не будет что-нибудь отображаться или будут какие-то неприятности, обновите страницу или перейдите на другую 
ссылку и вернитесь обратно (решение этой проблемы я знаю, но не успел её решить)
