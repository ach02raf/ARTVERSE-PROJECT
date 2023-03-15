import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "AutoresizeDirective",
})
export class AutoresizeDirectiveDirective {
  constructor(private el: ElementRef) {
    // Set the initial number of rows to 1
    // this.el.nativeElement.rows = 1;
  }

  @HostListener("mouseenter")
  onInput() {
    // const { scrollHeight, lineHeight } = this.el.nativeElement;
    this.el.nativeElement.style.backgroundColor = "red";
    // const rows = Math.ceil(scrollHeight / lineHeight);
    // // Increase the number of rows by 1 whenever a newline character is typed at the end of the current line
    // if (this.el.nativeElement.value.endsWith("\n")) {
    //   this.el.nativeElement.rows = rows + 1;
    // } else {
    //   this.el.nativeElement.rows = rows;
    // }
  }
}
