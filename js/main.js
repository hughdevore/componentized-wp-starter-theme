'use strict';

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
	var container, buttonContainer, button, menu, links, i, len;

	container = document.getElementById('site-navigation');
	buttonContainer = document.getElementById('menu-toggle-container');
	button = document.getElementById('menu-toggle');

	if (!container || !buttonContainer || !button) {
		return;
	}

	menu = container.getElementsByTagName('ul')[0];

	// Hide menu toggle button container if menu is empty and return early.
	if ('undefined' === typeof menu) {
		buttonContainer.style.display = 'none';
		return;
	}

	menu.setAttribute('aria-expanded', 'false');
	if (-1 === menu.className.indexOf('nav-menu')) {
		menu.className += ' nav-menu';
	}

	button.onclick = function () {
		if (-1 !== container.className.indexOf('toggled')) {
			container.className = container.className.replace(' toggled', '');
			button.setAttribute('aria-expanded', 'false');
			menu.setAttribute('aria-expanded', 'false');
		} else {
			container.className += ' toggled';
			button.setAttribute('aria-expanded', 'true');
			menu.setAttribute('aria-expanded', 'true');
		}
	};

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName('a');

	// Each time a menu link is focused or blurred, toggle focus.
	for (i = 0, len = links.length; i < len; i++) {
		links[i].addEventListener('focus', toggleFocus, true);
		links[i].addEventListener('blur', toggleFocus, true);
	}

	/**
  * Sets or removes .focus class on an element.
  */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while (-1 === self.className.indexOf('nav-menu')) {

			// On li elements toggle the class .focus.
			if ('li' === self.tagName.toLowerCase()) {
				if (-1 !== self.className.indexOf('focus')) {
					self.className = self.className.replace(' focus', '');
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
  * Toggles `focus` class to allow submenu access on tablets.
  */
	(function (container) {
		var touchStartFn,
			i,
			parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

		if ('ontouchstart' in window) {
			touchStartFn = function touchStartFn(e) {
				var menuItem = this.parentNode,
					i;

				if (!menuItem.classList.contains('focus')) {
					e.preventDefault();
					for (i = 0; i < menuItem.parentNode.children.length; ++i) {
						if (menuItem === menuItem.parentNode.children[i]) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove('focus');
					}
					menuItem.classList.add('focus');
				} else {
					menuItem.classList.remove('focus');
				}
			};

			for (i = 0; i < parentLink.length; ++i) {
				parentLink[i].addEventListener('touchstart', touchStartFn, false);
			}
		}
	})(container);
})();

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
	var isIe = /(trident|msie)/i.test(navigator.userAgent);

	if (isIe && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
				element;

			if (!/^[A-z0-9_-]+$/.test(id)) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();
'use strict';

/**
 * On page load, set up an event listener to display an alert when the Example component is clicked.
 */
(function () {

	var displayExampleClickAlert = function displayExampleClickAlert() {
		return alert('Example component was clicked.');
	};

	var setUpExampleClickHandler = function setUpExampleClickHandler() {
		document.querySelector('.example-component').addEventListener('click', displayExampleClickAlert);
	};

	document.addEventListener('DOMContentLoaded', setUpExampleClickHandler);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyIsImNvbXBvbmVudHMuanMiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwibWVudSIsImxpbmtzIiwiaSIsImxlbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJvbmNsaWNrIiwicmVwbGFjZSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVGb2N1cyIsInNlbGYiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRFbGVtZW50IiwidG91Y2hTdGFydEZuIiwicGFyZW50TGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJlIiwibWVudUl0ZW0iLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwicmVtb3ZlIiwiYWRkIiwiaXNJZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpZCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0cmluZyIsImVsZW1lbnQiLCJ0YWJJbmRleCIsImZvY3VzIiwiZGlzcGxheUV4YW1wbGVDbGlja0FsZXJ0IiwiYWxlcnQiLCJzZXRVcEV4YW1wbGVDbGlja0hhbmRsZXIiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFNQSxDQUFFLFlBQVc7QUFDWixLQUFJQSxTQUFKLEVBQWVDLGVBQWYsRUFBZ0NDLE1BQWhDLEVBQXdDQyxJQUF4QyxFQUE4Q0MsS0FBOUMsRUFBcURDLENBQXJELEVBQXdEQyxHQUF4RDs7QUFFQU4sYUFBWU8sU0FBU0MsY0FBVCxDQUF5QixpQkFBekIsQ0FBWjtBQUNBUCxtQkFBa0JNLFNBQVNDLGNBQVQsQ0FBeUIsdUJBQXpCLENBQWxCO0FBQ0FOLFVBQVNL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Q3ZDO0FBQ0E7O0FBRURJLGFBQVV0QyxTQUFTQyxjQUFULENBQXlCaUMsRUFBekIsQ0FBVjs7QUFFQSxPQUFLSSxPQUFMLEVBQWU7QUFDZCxRQUFLLENBQUksd0NBQXdDUCxJQUF4QyxDQUE4Q08sUUFBUXhCLE9BQXRELENBQVQsRUFBNkU7QUFDNUV3QixhQUFRQyxRQUFSLEdBQW1CLENBQUMsQ0FBcEI7QUFDQTs7QUFFREQsWUFBUUUsS0FBUjtBQUNBO0FBQ0QsR0FqQkQsRUFpQkcsS0FqQkg7QUFrQkE7QUFDRCxDQXZCRDs7O0FDaEhBOzs7QUFHQSxDQUFDLFlBQU07O0FBRU4sS0FBTUMsMkJBQTJCLFNBQTNCQSx3QkFBMkI7QUFBQSxTQUFNQyxNQUFNLGdDQUFOLENBQU47QUFBQSxFQUFqQzs7QUFFQSxLQUFNQywyQkFBMkIsU0FBM0JBLHdCQUEyQixHQUFNO0FBQ3RDM0MsV0FBUzRDLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDakMsZ0JBQTdDLENBQStELE9BQS9ELEVBQXdFOEIsd0JBQXhFO0FBQ0EsRUFGRDs7QUFJQXpDLFVBQVNXLGdCQUFULENBQTJCLGtCQUEzQixFQUErQ2dDLHdCQUEvQztBQUVBLENBVkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBuYXZpZ2F0aW9uLmpzLlxuICpcbiAqIEhhbmRsZXMgdG9nZ2xpbmcgdGhlIG5hdmlnYXRpb24gbWVudSBmb3Igc21hbGwgc2NyZWVucyBhbmQgZW5hYmxlcyBUQUIga2V5XG4gKiBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yIGRyb3Bkb3duIG1lbnVzLlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgY29udGFpbmVyLCBidXR0b25Db250YWluZXIsIGJ1dHRvbiwgbWVudSwgbGlua3MsIGksIGxlbjtcblxuXHRjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3NpdGUtbmF2aWdhdGlvbicgKTtcblx0YnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdtZW51LXRvZ2dsZS1jb250YWluZXInICk7XG5cdGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnbWVudS10b2dnbGUnICk7XG5cblx0aWYgKCAhIGNvbnRhaW5lciB8fCAhIGJ1dHRvbkNvbnRhaW5lciB8fCAhIGJ1dHRvbiApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtZW51ID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAndWwnIClbMF07XG5cblx0Ly8gSGlkZSBtZW51IHRvZ2dsZSBidXR0b24gY29udGFpbmVyIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cblx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIG1lbnUgKSB7XG5cdFx0YnV0dG9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bWVudS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xuXHRpZiAoIC0xID09PSBtZW51LmNsYXNzTmFtZS5pbmRleE9mKCAnbmF2LW1lbnUnICkgKSB7XG5cdFx0bWVudS5jbGFzc05hbWUgKz0gJyBuYXYtbWVudSc7XG5cdH1cblxuXHRidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggLTEgIT09IGNvbnRhaW5lci5jbGFzc05hbWUuaW5kZXhPZiggJ3RvZ2dsZWQnICkgKSB7XG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCAnIHRvZ2dsZWQnLCAnJyApO1xuXHRcdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cdFx0XHRtZW51LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgKz0gJyB0b2dnbGVkJztcblx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7XG5cdFx0XHRtZW51LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnUuXG5cdGxpbmtzICAgID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2EnICk7XG5cblx0Ly8gRWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCwgdG9nZ2xlIGZvY3VzLlxuXHRmb3IgKCBpID0gMCwgbGVuID0gbGlua3MubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0bGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcblx0XHRsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsIHRvZ2dsZUZvY3VzLCB0cnVlICk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxuXHRcdHdoaWxlICggLTEgPT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoICduYXYtbWVudScgKSApIHtcblxuXHRcdFx0Ly8gT24gbGkgZWxlbWVudHMgdG9nZ2xlIHRoZSBjbGFzcyAuZm9jdXMuXG5cdFx0XHRpZiAoICdsaScgPT09IHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRpZiAoIC0xICE9PSBzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCAnZm9jdXMnICkgKSB7XG5cdFx0XHRcdFx0c2VsZi5jbGFzc05hbWUgPSBzZWxmLmNsYXNzTmFtZS5yZXBsYWNlKCAnIGZvY3VzJywgJycgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWxmLmNsYXNzTmFtZSArPSAnIGZvY3VzJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZWxmID0gc2VsZi5wYXJlbnRFbGVtZW50O1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIGBmb2N1c2AgY2xhc3MgdG8gYWxsb3cgc3VibWVudSBhY2Nlc3Mgb24gdGFibGV0cy5cblx0ICovXG5cdCggZnVuY3Rpb24oIGNvbnRhaW5lciApIHtcblx0XHR2YXIgdG91Y2hTdGFydEZuLCBpLFxuXHRcdFx0cGFyZW50TGluayA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhLCAucGFnZV9pdGVtX2hhc19jaGlsZHJlbiA+IGEnICk7XG5cblx0XHRpZiAoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApIHtcblx0XHRcdHRvdWNoU3RhcnRGbiA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHR2YXIgbWVudUl0ZW0gPSB0aGlzLnBhcmVudE5vZGUsIGk7XG5cblx0XHRcdFx0aWYgKCAhIG1lbnVJdGVtLmNsYXNzTGlzdC5jb250YWlucyggJ2ZvY3VzJyApICkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2kgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1lbnVJdGVtID09PSBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuW2ldICkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSggJ2ZvY3VzJyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCAnZm9jdXMnICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSggJ2ZvY3VzJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBhcmVudExpbmsubGVuZ3RoOyArK2kgKSB7XG5cdFx0XHRcdHBhcmVudExpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0Rm4sIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KCBjb250YWluZXIgKSApO1xufSApKCk7XG5cbi8qKlxuICogRmlsZSBza2lwLWxpbmstZm9jdXMtZml4LmpzLlxuICpcbiAqIEhlbHBzIHdpdGggYWNjZXNzaWJpbGl0eSBmb3Iga2V5Ym9hcmQgb25seSB1c2Vycy5cbiAqXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNJZSA9IC8odHJpZGVudHxtc2llKS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKTtcblxuXHRpZiAoIGlzSWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZyggMSApLFxuXHRcdFx0XHRlbGVtZW50O1xuXG5cdFx0XHRpZiAoICEgKCAvXltBLXowLTlfLV0rJC8udGVzdCggaWQgKSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0aWYgKCBlbGVtZW50ICkge1xuXHRcdFx0XHRpZiAoICEgKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kudGVzdCggZWxlbWVudC50YWdOYW1lICkgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblx0fVxufSApKCk7XG4iLCIvKipcbiAqIE9uIHBhZ2UgbG9hZCwgc2V0IHVwIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGRpc3BsYXkgYW4gYWxlcnQgd2hlbiB0aGUgRXhhbXBsZSBjb21wb25lbnQgaXMgY2xpY2tlZC5cbiAqL1xuKCgpID0+IHtcblxuXHRjb25zdCBkaXNwbGF5RXhhbXBsZUNsaWNrQWxlcnQgPSAoKSA9PiBhbGVydCgnRXhhbXBsZSBjb21wb25lbnQgd2FzIGNsaWNrZWQuJyk7XG5cblx0Y29uc3Qgc2V0VXBFeGFtcGxlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGFtcGxlLWNvbXBvbmVudCcpLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGRpc3BsYXlFeGFtcGxlQ2xpY2tBbGVydCApO1xuXHR9O1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgc2V0VXBFeGFtcGxlQ2xpY2tIYW5kbGVyICk7XG5cbn0pKCk7XG4iXX0=
