/** @jsx React.DOM*/
/**
 * Created by bas on 19.11.2014.
 */
'use strict';

var React = require('react');
var Container = require('./Container');
window.React = React;


var cnt = (
    <div className="example-block">
        <Container>
            Из того большого числа js-библиотек более половины подменяют нативный механизм скролла. Это значит, что для враппера свойство overflow выставляется в значение hidden, а вложенный контейнер с нужным нам контентом меняет свою абсолютную позицию при генерации событий, связанных со скроллом (например, mousewheel). К таким решениям можно отнести: jScrollPane, Scrollbar Paper, jQuery Custom Scrollbar plugin, FleXcroll, Tiny Scrollbar и многие другие.
            <br /><br />
            При таком подходе возникает сразу два фундаментальных недостатка: отсутствие кроссбраузерности и отсутствие же кроссплатформенности. Дело в том, что интерфейс событий, генерируемых действиями пользователя, при помощи которых пользователь что-то скроллит, существенно отличается от браузера к браузеру: с точки зрения стандартов тут творится настоящий бардак. Более того, последовательность и логика «бросания» событий серьёзно отличается и между платформами. Например, трекпады на платформе Mac при скролле генерируют события типа Wheel с большей частотой, чем колесо обычной мыши, что приводит к чересчур быстрому скроллу в ряде подобных решений.
            <br /><br />
            Именно эти недостатки эмуляции скролла привели нас к формулированию первого пункта требований.
            <br /><br />
            Многие решения изначально позиционируются как плагины к jQuery. В ситуации, когда мы используем jQuery по частям, возникает проблема экономии трафика. Проблема существенно растёт при наличии у плагина зависимости от куда более тяжеловесного jQuery UI. Это касается, например, ShortScroll и Vertical Scroll. А также от ряда других библиотек: например, один из немногих jQuery плагинов, сохраняющих нативный механизм скролла, Scrollbars, зависит от 4 плагинов: event.drag, resize, mousehold и mousewheel общим весом более 10 кб.
            <br /><br />
            Третьему пункту требований не удовлетворяет ни одно из найденных нами решений.
        </Container>
    </div>
);

React.renderComponent(cnt, document.body);