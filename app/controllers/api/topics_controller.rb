class Api::TopicsController < ApplicationController
    before_action :require_logged_in

    def create
        @topic = Topic.new(topic_params)
        if @topic.save
            render "api/topics/show"
        else 
            render json: @topic.errors.full_messages, status: 422
        end
    end 

    def index 
        @topics = Topic.all 
        render "api/topics/index"
    end

    def show
            @topic = Topic.find(params[:id])
            if @topic
                render "api/topics/show"
            else
                render json: @topic.errors.full_messages, status: 404
            end
    end
    
    


    def topic_params
        params.require(:topic).permit(:title)
    end
end