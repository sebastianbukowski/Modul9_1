'use strict';
var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

var content = document.getElementById('content');
var divsToDisplay = '';
console.log('content => ', content);

function createBox(boxObject) {
  var box = boxObject;
  console.log('single box => ', box);
  const boxId = box.id;
  const boxTitle = box.title;
  const boxContent = box.content;
  const boxCategories = box.categories;
  boxCategories.unshift('box');
  const classList = boxCategories.join(' ');
  console.log('classList => ', classList);
  var boxString =
  '<div ' + 'id="' + boxId + '"' + ' class="' + classList + '"' + ">"
  + '<header>' + boxTitle + '</header>' + boxContent
   + "</div>";
  console.log('boxString => ',boxString)
  return boxString;
  /*content.innerHTML = boxString;*/
};

(function(){
  for(var key in data){
    console.log(key);
    var boxObject = data[key];
    console.log('boxObject => ', boxObject);
    var createdBox = createBox(boxObject);
    divsToDisplay = divsToDisplay + createdBox;
    console.log('divsToDisplay => ',divsToDisplay);
  }
})();

content.innerHTML = divsToDisplay;
