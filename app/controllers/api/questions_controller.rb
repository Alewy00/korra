class Api::QuestionsController < ApplicationController
    before_action :require_logged_in

    def create
        @question = Question.new(question_params)
        @question.author_id = current_user.id
        @question.topic_id = 0
        if @question.save
            render "api/questions/show"
        else 
            render json: @question.errors.full_messages, status: 422
        end
    end 

    def index
        if params[:search].blank?
        @questions = Question.all
        else
        search = params[:search].downcase
        @questions = Question.all.where("lower(body) LIKE ?", "%#{search}%" )
        end
        render "api/questions/index"
    end 

    def show
        @question = Question.find_by(id: params[:id])
        render "api/questions/show"
    end
    
    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            render "api/questions/show"
        else
         render json: @question.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        # render json: "hello"
        render json: ["deleted"]
    end

    def question_params
        params.require(:question).permit(:body, :topic_id, :search)
    end
end