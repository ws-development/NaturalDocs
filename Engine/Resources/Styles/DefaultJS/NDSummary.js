﻿/*
	Include in output:

	This file is part of Natural Docs, which is Copyright © 2003-2011 Greg Valure.
	Natural Docs is licensed under version 3 of the GNU Affero General Public
	License (AGPL).  Refer to License.txt or www.naturaldocs.org for the
	complete details.

	This file may be distributed with documentation files generated by Natural Docs.
	Such documentation is not covered by Natural Docs' copyright and licensing,
	and may have its own copyright and distribution terms as decided by its author.


	Substitutions:

		Summary Info Members:

			`TopicTypeIDNames = 0
			`InSourceOrder = 1
			`ByNameAndType = 2
			`ByName = 3

		Summary Entry Members:

			`TopicID = 0
			`TopicTypeID = 1
			`NameHTML = 2
			`PrototypeHTML = 3
			`SummaryHTML = 4
			`Symbol = 5
*/

"use strict";


/* Class: NDSummary
	___________________________________________________________________________

*/
var NDSummary = new function ()
	{ 

	// Group: Functions
	// ________________________________________________________________________


	/* Function: Start
	*/
	this.Start = function ()
		{
		};


	/* Function: GoToFileHashPath
		Changes the current summary to the passed hash string, such as "File2:folder/folder/file.cs".
	*/
	this.GoToFileHashPath = function (hashPath)
		{
		var head = document.getElementsByTagName("head")[0];

		// Remove the previous loader if there was one.
		var loader = document.getElementById("NDSummaryLoader");

		if (loader)
			{  head.removeChild(loader);  }

		// Create a new one.

		var script = document.createElement("script");
		script.src = NDCore.FileHashPathToMetaDataPath(hashPath);
		script.type = "text/javascript";
		script.id = "NDSummaryLoader";

		head.appendChild(script);
		};


	/* Function: OnSummaryLoaded
	*/
	this.OnSummaryLoaded = function (hashPath, summaryInfo, summaryEntries)
		{
		if (hashPath == NDPageFrame.hashPath)
			{  
			this.summaryInfo = summaryInfo;
			this.summaryEntries = summaryEntries;
			this.UpdateSummary();  
			}
		};


	/* Function: UpdateSummary
	*/
	this.UpdateSummary = function ()
		{
		if (this.summaryEntries == undefined)
			{  return;  }
		};



	// Group: Variables
	// ________________________________________________________________________


	/* var: summaryInfo
	*/
		// this.summaryInfo = undefined;

	/* var: summaryEntries
	*/
		// this.summaryEntries = undefined;
	};
