class Api::AnnotationsController < ApplicationController

    before_action :require_logged_in

    def show
        @annotation = Annotation.find(params[:id])
    end

    def create
        @annotation = current_user.annotations.new(annotation_params)

        if @annotation.save
            render :show
        else
            render json: @annotation, status: :unprocessable_entity
        end
    end

    def destroy
        @annotation = current_user.annotations.find(params[:id])
        @annotation.destroy
    end

    private
    def annotation_params
        params.require(:annotation).permit(:author_id, :track_id, :annotation_string, :annotation_body)
    end
end