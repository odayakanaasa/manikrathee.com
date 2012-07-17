default_run_options[:pty] = true  # Must be set for the password prompt
                                  # from git to work
set :repository, "git@github.com:manikrathee/manikrathee.com.git"  # Your clone URL
set :scm, "git"
set :user, "manikrathee.com"  # The server's user for deploys
set :use_sudo, false




set :branch, "master"
set :deploy_via, :remote_cache

set :application, "manikrathee.com"

server "s85195.gridserver.com", :app, :web, :db, :primary => true
#set :deploy_to, "/nfs/c04/h03/mnt/85195/domains/manikrathee.com/_dev/deploy"
set :deploy_to, "domains/manikrathee.com/html/_dev/deploy"


#set :repository,  "set your repository location here"

#set :scm, :subversion
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

#role :web, "your web-server here"                          # Your HTTP server, Apache/etc
#role :app, "your app-server here"                          # This may be the same as your `Web` server
#role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end