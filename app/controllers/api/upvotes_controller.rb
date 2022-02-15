class Api::UpvotesController < ApplicationController

    def show
        @upvote = Upvote.find(params[:id])
    end

    def create
        @upvote = current_user.upvotes.new(upvote_params)

        if @upvote.save
            render :show
        else
            render json: @upvote, status: :unprocessable_entity
        end
    end

    def destroy
        @upvote = current_user.upvotes.find(params[:id])
        @upvote.destroy
    end

    def update
        if @upvote.update(upvote_params)
            render :show
        else
            render json: @upvote.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def upvote_params
        params.require(:upvote).permit(:author_id, :annotation_id, :value)
    end
end