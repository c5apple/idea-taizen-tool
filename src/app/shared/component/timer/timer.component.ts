import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../../service/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  /** 自動開始 */
  @Input() autoPlay = false;

  /** 残り時間 */
  @Input() time: number;

  /** タイマー */
  timer: Subscription;

  /** 停止中か */
  isStoped: boolean;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    // 持ち時間設定
    if (this.time === undefined) {
      this.time = this.timerService.timeLimit;
    }

    if (this.autoPlay) {
      this.start();
    }
  }

  /**
   * 残り時間表記
   */
  get timeStr(): string {
    const h = Math.floor(this.time / 60 / 60);
    const m = Math.floor(this.time / 60 % 60);
    const s = Math.floor(this.time % 60);

    if (h >= 1) {
      return h + '時間' + `0${m}`.slice(-2) + '分' + `0${s}`.slice(-2) + '秒';
    } else if (m !== 0) {
      return m + '分' + `0${s}`.slice(-2) + '秒';
    } else {
      return s + '秒';
    }
  }

  /**
   * タイマー開始
   */
  public start() {
    this.timer = this.timerService.getTimer().subscribe(time => {
      // カウントダウン
      this.time--;

      // 終了
      if (this.time === 0) {
        this.stop();
      }
    });
  }

  /**
   * タイマー終了
   */
  public stop() {
    this.timer.unsubscribe();
  }

  /**
   * タイマー開始/終了
   */
  public toggle() {
    if (this.isStoped) {
      this.start();
    } else {
      this.stop();
    }
    this.isStoped = !this.isStoped;
  }
}
