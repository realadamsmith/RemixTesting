import { Form, useActionData, useTransition } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { CommentEntry } from "~/api/comments";

type CommentsListProps = {
  filmId: string;
  comments: CommentEntry[];
};

export default function CommentsList({ filmId, comments }: CommentsListProps) {
  const transition = useTransition();
  const actionData = useActionData();
  const [somestate, setsomeState] = useState("");

  let isAdding = 
    transition.state === "submitting" &&
    transition.submission.formData.get("_action") === "create";
  let formRef = useRef;

  // useEffect(() => {
  //   if (!isAdding) {
  //     formRef.current.reset();  // Solve the current issue
  //   }
  // }, [isAdding]);

  // function PersonItem({ comment }) {
  //   let isDeleting = 
  //     transition.submission?.formData?.get("id") === comment.id;
  // }

  const inputStyle = (fieldName: string) =>
    `border border-slate-400 rounded py-2 px-3 inline-block w-full ${
      actionData?.errors[fieldName] ? " border-red-500" : ""
    }`;
  return (
    <div>
      <h2 className="text-3xl mb-2">Community Comments</h2>

      <div className="flex flex-col space-y-4 my-3 max-w-3xl">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded border border-slate-400 max-w-3xl">
            <div className="text-gray-700 font-bold text-xl mb-2">
              {comment.name}
            <button type="submit" name="_action" value="delete" className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-2 float-right">X</button>

            </div>
            <input type="hidden" name="id" value={comment.id} />
            <p className="text-gray-700">{comment.message}</p>
          </div>
        ))}

        <div className="p-4 rounded border border-slate-400">
          <Form 
          // ref={formRef} 
          method="post" action={`/films/${filmId}`}>
            <fieldset disabled={transition.state === "submitting"}>
              <label className="inline-block my-2">Name:</label>
              <input name="name" type="text" className={inputStyle("name")} />
              {actionData?.errors.name && (
                <p className="text-red-500">{actionData.errors.name}</p>
              )}

              <label className="inline-block my-2">Message:</label>
              <textarea name="message" className={inputStyle("message")} />
              {actionData?.errors.message && (
                <p className="text-red-500">{actionData.errors.message}</p>
              )}

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
              >
                {transition.state === "submitting"
                  ? "Adding..."
                  : "Add comment"}
              </button>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
}
