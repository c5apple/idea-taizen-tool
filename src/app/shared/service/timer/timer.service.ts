import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  /** 持ち時間 */
  private _timeLimit = 1;

  constructor() { }

  /**
   * 持ち時間を取得する
   */
  get timeLimit(): number {
    return this._timeLimit;
  }

  /**
   * 持ち時間を設定する
   */
  set timeLimit(num: number) {
    this._timeLimit = num;
  }

  public getTimer(): Observable<number> {
    // 1秒間隔で経過秒数を返す
    return interval(1000);
  }

  /**
   * 初期値に戻す
   */
  public reset(): void {
    this._timeLimit = 1;
  }
}
