class Api::CommentsController < ApplicationController
    before_action :require_logged_in

    def show
        @comment = Comment.find(params[:id])
    end

    def create
        @comment = current_user.comments.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment, status: :unprocessable_entity
        end
    end

    def destroy
        @upvote = current_user.upvotes.find(params[:id])
        @upvote.destroy
    end

    private
    def comment_params
        params.require(:comment).permit(:author_id, :annotation_id, :body)
    end
end