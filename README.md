1) Из-за tranform scale "скачут" соседние элементы.
2) Todo: `<AnimateGroup>{items}</AnimateGroup>`. Возможно React.cloneElement каждого элемента и изменять width/height вместо transform scale
3) Не работают анимации при вложенных
`<AnimateLayoutPositionChange />` и в комбинации с `<AnimateMount />`
4) Не работает при
`componentDidMount() { setInterval(() => this.forceUpdate(), 100);}`
5) `<AnimateMount />` может слишком растягиваться. мб убрать лишний div или через ref менять стили без обертки.
