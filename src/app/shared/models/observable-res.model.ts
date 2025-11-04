import { Observable } from "rxjs";
import { ErrorBack } from "./api/error-back.model";

interface ResList<T> {
  data: T[] | null,
  loading: boolean,
  error: ErrorBack | null
}

type ObservableResList<T> = Observable<ResList<T>>

interface Res<T> {
  data: T | null,
  loading: boolean,
  error: ErrorBack | null
}

type ObservableRes<T> = Observable<Res<T>>

export type {
  ObservableRes,
  ObservableResList
};