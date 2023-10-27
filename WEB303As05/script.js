/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem {
        constructor(uniqueId, name, description, category) {
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(uniqueId, name, description, category) {
            if (this.uniqueId === uniqueId && name && description && category) {
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
            }
        }

        toString() {
            return `
                <div class="content-item-wrapper">
                    <div id="content-item-${this.uniqueId}">
                        <h2 class="name">${this.name}</h2>
                        <p class="description">${this.description}</p>
                        <div class="category">${this.category}</div>
                    </div>
                </div>
            `;
        }
    }

    let content = [
        {
            "uniqueId": 0,
            "name": "NIKE",
            "description": "Shoes",
            "category": "Outfit"
        },
        {
            "uniqueId": 1,
            "name": "ADIDAS",
            "description": "sportswear",
            "category": "Outfit"
        },
        {
            "uniqueId": 2,
            "name": "PUMA",
            "description": "Clothes",
            "category": "Outfit"
        },
        {
            "uniqueId": 3,
            "name": "UNDER ARMOUR",
            "description": "Shoes",
            "category": "Outfit"
        }
    ];

    $.each(content, function (key, val) {
        let item = new ContentItem(val.uniqueId, val.name, val.description, val.category);
        $('#content-item-list').append(item.toString());
    });

    // Apply CSS styles to content-item-wrapper
    $('.content-item-wrapper').css({
        'margin': 'auto',
        'margin-left': '50px',
        'margin-top': '30px', // Fixed a typo here (changed "marging" to "margin")
        'border': 'dashed 3px black',
        'width': '30%',
        'padding': '20px',
        'margin-bottom': '20px'
    });
});



