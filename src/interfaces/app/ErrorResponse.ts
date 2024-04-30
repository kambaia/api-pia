import MessageResponse from "./MessageInterface";
export default interface ErrorResponse extends MessageResponse {
  stack?: string;
}