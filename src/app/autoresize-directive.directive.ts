import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[autoresize]",
})
export class AutoresizeDirectiveDirective {
  @HostBinding("style.color") bgColor = "pink";
  constructor() {}

  @HostListener("click")
  mouseenter() {
    console.log("hello");
    this.bgColor = "red";
  }

  // private adjustHeight(textArea: HTMLTextAreaElement): void {
  //   console.log("hello");

  //   textArea.style.overflow = "hidden";
  //   textArea.style.height = "auto";
  //   console.log(textArea.scrollHeight);

  //   textArea.style.height = textArea.scrollHeight + "px";
  // }
}
