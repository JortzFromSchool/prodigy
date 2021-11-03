class Api::TracksController < ApplicationController
    def show
        @track = Track.find(params[:id])
    end

    def index
        # future revision: change this to 10, sorted by views
        @tracks = Track.all
    end
end