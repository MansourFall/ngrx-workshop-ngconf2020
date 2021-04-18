import { createAction, props } from "@ngrx/store";
import { BookModel } from "src/app/shared/models";


export const booksLoadedSuccess = createAction(
    "[Books API] Books Loaded Success",
    props<{books: BookModel[]}>()
);

export const bookCreatedSuccess = createAction(
    "[Books API] Book Created Success",
    props<{book: BookModel}>()
);

export const bookUpdatedSuccess = createAction(
    "[Books API] Book Updated Success",
    props<{book: BookModel}>()
);

export const bookDeletedSuccess = createAction(
    "[Books API] Book Deleted Success"
);
