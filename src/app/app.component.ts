import { Component, OnInit, Renderer2, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';

declare var $: any; // Import jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string | undefined; // Assuming title is a string
  
  constructor(
    private renderer: Renderer2, 
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Execute code only if running in the browser environment

      // nav background
      const header = this.elRef.nativeElement.querySelector("header");

      window.addEventListener("scroll", () => {
        header.classList.toggle("shadow", window.scrollY > 0);
      });

      // Filter
      $(document).ready(() => {
        $(".filter-item").click((event: any) => {
          const value = $(event.target).attr("data-filter");
          if (value === "all") {
            $(".post-box").show("1000");
          } else {
            $(".post-box")
              .not("." + value)
              .hide(1000);
            $(".post-box")
              .filter("." + value)
              .show("1000");
          }
          $(event.target).addClass("active-filter").siblings().removeClass("active-filter");
        });
      });

      // Home
      const next = this.elRef.nativeElement.querySelector('.next');
      const prev = this.elRef.nativeElement.querySelector('.prev');

      if (next && prev) {
        next.addEventListener('click', () => {
          const items = this.elRef.nativeElement.querySelectorAll('.item');
          const slide = this.elRef.nativeElement.querySelector('.slide');
          slide.appendChild(items[0]);
        });

        prev.addEventListener('click', () => {
          const items = this.elRef.nativeElement.querySelectorAll('.item');
          const slide = this.elRef.nativeElement.querySelector('.slide');
          slide.prepend(items[items.length - 1]);
        });
      }
    }
  }
}

