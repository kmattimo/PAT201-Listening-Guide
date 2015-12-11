

<div class="container">
       <div class="row">
           
            <div class="col-lg-12">
                <h1>PAT 201 Listening Study Guide</h1>
				<br>
				<div class="well well-sm">
					A Javascript experiment by Kyle Mattimore. <br>
					Email kmattimo@umich.edu with any bugs or feedback. 
				</div>
                
           </div>
        </div>        
	<br>
        <div id="mediaDiv" style="display: none;" class="row">
            <div class="col-lg-12">
				<audio id="song" src="/static/media/Kids.m4a#t=60" preload="auto" controls > Get a real browser to play the audio! </audio>
			</div>
		</div>
		<div  class="row" >
            <div class="col-sm-4">
				<button id="playPause" class="btn btn-primary" onclick = "playPause()">Play/Pause</button>
				
				<button class="btn btn-primary" onclick = "seekReset()">Restart</button>
			</div>	
			 <div class="col-sm-4">	
				<button class="btn btn-sm" onclick = "toggleMedia()">Show/hide Player</button>
			
			</div>
		</div>
		<div  class="row" >
            <div class="col-sm-4">
				<button class="btn" type="submit" class="btn btn-primary btn-lg" onclick="newSong()">New Song</button> <br> 
			</div>
			<div class="col-sm-4">
					<input type="radio" name="playtype" value="random" checked> Random 20 seconds <br>
					<input type="radio" name="playtype" value="start"> From Beginning <br>
            </div>
        </div>
		<br><br>
      
		<div class="row">
			 <div class="col-lg-12">
				<div class="progress">
					<div id="progressBar" class="progress-bar progress-bar-info" role="progressbar" style="width: 0%">
					<span class="sr-only"> </span>
					</div>
				</div>
			</div>
		</div>
		<div class="row" id="refreshButton" style="display: none;">
			 <div class="col-lg-12">
				<button <button class="btn btn-info" onclick = "location.reload ();">Done! Click to Refresh.</button>
				<br><br>
			</div>
		</div>
		
        <div class="row">
            <div class="col-sm-6">
				<div class="form-group" id="titleDiv">
					<label id="titleLabel" class="control-label" for="titleInput"> Title</label>
					<input id="titleInput" class="form-control" type="text" placeholder="Type song title..." tabindex="1" >
						<select id="titleList" class="form-control" onchange="onCheatTitleSelect();">
							<option value="">Cheat...</option>
						</select>
						<button class="btn btn-primary" onclick = "fillTitle()">Give up</button>
				</div>
				
            </div>
         
            <div class="col-sm-6">
                <div class="form-group" id="artistDiv">
					<label id="artistLabel" class="control-label" for="artistInput">Composer</label>
					<input id="artistInput" class="form-control" type="text" placeholder="Type composer..." tabindex="2">
						<select id="artistList" class="form-control" onchange="onCheatArtistSelect();">
							<option value="">Cheat...</option>
						</select>
						<button class="btn btn-primary" onclick = "fillArtist()">Give up</button>
				</div>
					
			</div>
		</div>
		<br><br>


</div>
		
<script src="/static/js/pat201.js"></script>

